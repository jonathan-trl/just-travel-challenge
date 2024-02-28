import { JTBuild } from '@/components/icon/JTBuild'
import { JTBuildHigh } from '@/components/icon/JTBuildHigh'
import { JTHome } from '@/components/icon/JTHome'
import { PropertyProps } from '@/types/filters/Property'

export const properties: PropertyProps[] = [
  {
    id: 1,
    name: 'Casa',
    qtt: 346,
    icon: JTHome,
  },
  {
    id: 2,
    name: 'Apartamento',
    qtt: 234,
    icon: JTBuild,
  },
  {
    id: 3,
    name: 'Hotel',
    qtt: 23,
    icon: JTBuildHigh,
  },
]
