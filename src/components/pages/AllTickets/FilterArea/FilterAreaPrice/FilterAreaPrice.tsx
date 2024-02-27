import { Button } from '@/components/common/Button'
import { FilterAreaContainer } from '../Layout/FilterAreaContainer'
import { FilterAreaTitle } from '../Layout/FilterAreaTitle'

export const FilterAreaPrice = () => {
  return (
    <FilterAreaContainer>
      <FilterAreaTitle title="Preço" />
      <div className="grid grid-cols-2 gap-2">
        <div>
          <Button title="R$ 10,00 - R$ 390,00" />
        </div>
        <div>
          <Button title="R$ 10,00 - R$ 390,00" selected={false} />
        </div>
        <div>
          <Button title="R$ 10,00 - R$ 390,00" selected={false} />
        </div>
        <div>
          <Button title="R$ 10,00 - R$ 390,00" selected={false} />
        </div>
      </div>
    </FilterAreaContainer>
  )
}
