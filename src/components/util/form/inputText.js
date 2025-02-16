export default function InputText({ placeholder, className, name,register,errors   }) {
  return (
    <>
    <input
      type="text"
      placeholder={placeholder}
      className={className}
      name={name}
      {...register(name)}
    />
    
    {errors[name] && <p className="text-red-500 text-sm">{errors[name].message}</p>}

    </>
  );
}
