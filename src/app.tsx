import logo from './assets/logo-nlw.svg'
import { NoteCard } from './components/note-card'
import { NoteNewCard } from './components/note-new-card'

const note = {
  date: new Date(),
  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea odit ut dolorem excepturi temporibus illum accusamus, a, adipisci totam fugit eum similique expedita ullam aut, beatae perspiciatis cupiditate. Amet, id.'
}

export function App() {
  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6'>
      <img src={logo} alt='Nlw Expert' />
  
      <form>
        <input
          type='text'
          placeholder='Busque em suas notas...'
          className='w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500'
        />
      </form>

      <div className='h-px bg-slate-700' />

      <div className='grid grid-cols-3 gap-6 auto-rows-[250px]'>
        <NoteNewCard />
        
        <NoteCard note={note} />
      </div>
    </div>
  )
}
