import GetAllLayouts from "@/api/getAllLayouts";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const layouts = GetAllLayouts()

export function RemoveLayout() {

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>-</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Atenção!</DialogTitle>
          <DialogDescription>
            Seu layout sera removido de forma permanente. 
          </DialogDescription>
        </DialogHeader>
        <select name="selectArea" id="selectArea" onChange={handleSelectChange}>
         { 
          layouts.then(layoutes => (
            layoutes.map((layout: { _id:string, title: string; }) => (
              <option key={layout._id} value={layout.title}>
                {layout.title}
              </option>
            ))))
          }  
        </select>       
        <DialogFooter>
          <Button id="removeLayout" name="removeLayout" variant='destructive'>Remover</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
