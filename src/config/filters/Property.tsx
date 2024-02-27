import { JTBuild } from '@/components/icon/JTBuild'
import { JTBuildHigh } from '@/components/icon/JTBuildHigh'
import { JTHome } from '@/components/icon/JTHome'

export const properties = [
  {
    id: 1,
    name: 'Casa',
    qtt: 346,
    icon: <JTHome color="#4070F4" />,
    selected: true,
  },
  {
    id: 2,
    name: 'Apartamento',
    qtt: 234,
    icon: <JTBuild />,
    selected: false,
  },
  {
    id: 3,
    name: 'Hotel',
    qtt: 23,
    icon: <JTBuildHigh />,
    selected: false,
  },
]
