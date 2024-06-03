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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import axios from "axios"

const insertNewLayout = async () => {
    console.log('INSERIU NO BANCO!');
    const labelLayoutName = document.querySelector('#labelLayoutName') as HTMLElement;
    const labelLayoutDescription = document.querySelector('#labelLayoutDescription') as HTMLElement;
    
    const layoutJson = {
        'title' : labelLayoutName.value,
        'description' : labelLayoutDescription.value,
    }

    const data = await axios.post('http://localhost:3001/saveLayout', layoutJson)
    window.location.reload()
}

export function AddLayout() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>+</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Criar Layout</DialogTitle>
          <DialogDescription>
            Crie seu layout de nota fiscal. 
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="labelLayoutName" className="text-right">
              Layout:
            </Label>
            <Input
              id="labelLayoutName"
              placeholder="Nota fiscal - 13"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="labelLayoutDescription" className="text-right">
              Descrição:
            </Label>
            <Textarea
              id="labelLayoutDescription"
              placeholder="Digite uma descrição para seu layout"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button id="saveLayout" name="saveLayout" onClick={insertNewLayout} type="submit">Adicionar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
