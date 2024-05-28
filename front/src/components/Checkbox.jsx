export function Checkbox ({ title, label, value, handleChange }) {
  return (
    <div className='form-control'>
      <label className='label cursor-pointer'>
        <span className='label-text font-bold max-w-[3.75rem] md:w-[3.75rem]'>{title}:</span>
        <span className='label-text min-w-36'>{label}</span>
        <input onChange={handleChange} value={value} type='checkbox' className='checkbox md:mr-8' />
      </label>
    </div>
  )
}
export function MultiCheckbox ({ title, label, label2, value, value2, handleChange, name }) {
  return (
    <div className='form-control'>
      <label className='label cursor-pointer'>
        <span className='label-text font-bold max-w-[3.75rem] md:max-w-[3.75rem]'>{title}:</span>
        <div onChange={handleChange} className='md:w-full'>
          <div className='flex justify-between my-2 gap-8'>
            <span className='label-text min-w-36 md:pl-4 xl:pl-8'>{label}</span>
            <input value={value} name={name} type='radio' className='radio md:mr-8' />
          </div>
          <div className='flex justify-between my-2'>
            <span className='label-text min-w-36 md:pl-4 xl:pl-8'>{label2}</span>
            <input value={value2} name={name} type='radio' className='radio md:mr-8' />
          </div>
        </div>
      </label>
    </div>
  )
}
