import { Components } from "./Components"
import { General } from "./General"

export function MainContent({ selectedItem }: { selectedItem: string }) {
  return (
    <div>
      
      <div>
        {selectedItem==='General' && <General />}
      </div>
      <div>
        {selectedItem==='Schemas' && <Components />}
      </div>
    </div>
  )
}