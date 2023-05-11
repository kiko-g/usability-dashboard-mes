import request from 'request';
import { NextApiRequest, NextApiResponse } from 'next';
import { config, parseEvents, evaluateWizards, groupWizards } from '../../../../utils/matomo';
import { CustomAPIError, IWizardGroup } from '../../../../@types';

type ResponseType = IWizardGroup[] | CustomAPIError;

export default function getWizardEvents(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
  if (req.method !== 'GET') res.status(405).json({ error: 'Method Not Allowed' });

  const period = 'range'; // day, week, month, year, range
  const date = `2023-04-29,today`; // YYYY-MM-DD
  const apiUrl = `${config.matomoSiteUrl}/index.php?module=API&method=Events.getCategory&secondaryDimension=eventAction&flat=1&format=json&idSite=${config.matomoSiteId}&period=${period}&date=${date}&token_auth=${config.matomoToken}`;

  request(apiUrl, { json: true }, (err, response, body) => {
    if (err) {
      res.status(500).json({ error: 'Internal server error' });
    }

    if (response.statusCode !== 200 || body.result === 'error') {
      res.status(response.statusCode).json({ error: 'Error from Matomo API', message: body.message });
    }

    const wizards = parseEvents(body, 'wizard');
    const evaluatedWizards = evaluateWizards(wizards);
    const groupedWizards = groupWizards(evaluatedWizards);
    res.status(200).json(groupedWizards);
  });
}