import logo from './assets/logo-nlw.svg'

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
        <div className='rounded-md bg-slate-700 p-5 space-y-3'>
          <span className='text-sm font-medium text-slate-300'>
            Adicionar nota
          </span>
          <p className='text-sm leading-6 text-slate-400'>
            Grave uma nota em áudio que será convertida para texto automaticamente.
          </p>
        </div>
        
        <div className='rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative'>
          <span className='text-sm font-medium text-slate-300'>
            Há 4 dias
          </span>
          <p className='text-sm leading-6 text-slate-400'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro vero unde illum consectetur perspiciatis enim. Nulla at omnis animi accusamus, recusandae illum possimus assumenda eum, doloribus nam consequuntur modi sequi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro vero unde illum consectetur perspiciatis enim. Nulla at omnis animi accusamus, recusandae illum possimus assumenda eum, doloribus nam consequuntur modi sequi.
          </p>

          <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 pointer-events-none' />
        </div>

        <div className='rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative'>
          <span className='text-sm font-medium text-slate-300'>
            Há 2 dias
          </span>
          <p className='text-sm leading-6 text-slate-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius, ducimus itaque esse fuga et asperiores labore quis maiores qui totam soluta quaerat ipsam, sit suscipit eaque, sapiente mollitia aut!Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius, ducimus itaque esse fuga et asperiores labore quis maiores qui totam soluta quaerat ipsam, sit suscipit eaque, sapiente mollitia aut!
          </p>

          <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 pointer-events-none' />
        </div>

        <div className='rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative'>
          <span className='text-sm font-medium text-slate-300'>
            Há 2 dias
          </span>
          <p className='text-sm leading-6 text-slate-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius, ducimus itaque esse fuga et asperiores labore quis maiores qui totam soluta quaerat ipsam, sit suscipit eaque, sapiente mollitia aut!Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius, ducimus itaque esse fuga et asperiores labore quis maiores qui totam soluta quaerat ipsam, sit suscipit eaque, sapiente mollitia aut!
          </p>

          <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 pointer-events-none' />
        </div>
      </div>
    </div>
  )
}
