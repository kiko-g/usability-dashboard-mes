import React from 'react'
import { PieChart } from '@/components/utils'
import { PageVisitsTable, SelectPageVisitsType } from '.'
import type { PieData, PageViewsAPI, PageVisitsVizTypeFilter } from '@/@types'

export default function PageVisitsViz({ data }: { data: PageViewsAPI[] }) {
  const [vizType, setVizType] = React.useState<PageVisitsVizTypeFilter>({ name: 'All', value: 'all' })
  const seeAll = React.useMemo<boolean>(() => vizType.value === 'all', [vizType])

  // create pages frequencies
  const visitedPagesFreqs = React.useMemo<PieData[]>(() => {
    const pagesFreq = data.map((item) => item.visitedUrls).flat()
    const pagesCount = pagesFreq.reduce<Record<string, number>>((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1
      return acc
    }, {})

    return Object.entries(pagesCount).map(([name, count]) => ({ name, count }))
  }, [data])

  // create browsers frequencies
  const browserFreqs = React.useMemo<PieData[]>(() => {
    const frequencies = data.reduce<Record<string, number>>((acc, curr) => {
      const browser = curr.browserName
      acc[browser] = (acc[browser] || 0) + 1
      return acc
    }, {})

    return Object.entries(frequencies).map(([name, count]) => ({ name, count }))
  }, [data])

  // create device type frequencies
  const deviceFreqs = React.useMemo<PieData[]>(() => {
    const frequencies = data.reduce<Record<string, number>>((acc, curr) => {
      const device = curr.deviceType
      acc[device] = (acc[device] || 0) + 1
      return acc
    }, {})

    return Object.entries(frequencies).map(([name, count]) => ({ name, count }))
  }, [data])

  // create screen width*height frequencies
  const screenFreqs = React.useMemo<PieData[]>(() => {
    const frequencies = data.reduce<Record<string, number>>((acc, curr) => {
      const screen = curr.deviceScreenSize
      const screenStr = `${screen.width}x${screen.height}`
      acc[screenStr] = (acc[screenStr] || 0) + 1
      return acc
    }, {})

    return Object.entries(frequencies).map(([name, count]) => ({ name, count }))
  }, [data])

  // create operating system usage frequencies
  const osFreqs = React.useMemo<PieData[]>(() => {
    const frequencies = data.reduce<Record<string, number>>((acc, curr) => {
      const os = curr.operatingSystem
      acc[os] = (acc[os] || 0) + 1
      return acc
    }, {})

    return Object.entries(frequencies).map(([name, count]) => ({ name, count }))
  }, [data])

  if (data.length === 0)
    return <div className="mt-2 rounded border bg-black/20 p-4 dark:bg-white/20">No Page Visits Data Found.</div>

  return (
    <section className="mt-2 flex flex-col space-y-4">
      <div className="flex flex-col items-end justify-end gap-2 md:flex-row">
        <SelectPageVisitsType pickedHook={[vizType, setVizType]} />
      </div>

      <div className="flex flex-col space-y-8">
        {vizType.value === 'urls' || seeAll ? (
          <PieChart data={visitedPagesFreqs} title="Visited URLs Pie Chart" />
        ) : null}
        {vizType.value === 'browsers' || seeAll ? (
          <PieChart data={browserFreqs} title="Browser Usage Pie Chart" />
        ) : null}
        {vizType.value === 'devices' || seeAll ? <PieChart data={deviceFreqs} title="Devices Type Pie Chart" /> : null}
        {vizType.value === 'screens' || seeAll ? <PieChart data={screenFreqs} title="Screen Sizes Pie Chart" /> : null}
        {vizType.value === 'os' || seeAll ? <PieChart data={osFreqs} title="Operating Systems Pie Chart" /> : null}
        {vizType.value === 'table' || seeAll ? <PageVisitsTable visitsData={data} /> : null}
      </div>
    </section>
  )
}
