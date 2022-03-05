export default function Badge({ title, className }) {
  return (
    <div className="flex items-center">
      <p
        className={` ${className} text-sm text-primary font-bold mx-auto rounded-full px-5 py-3  bg-[#C6F4F8] text-center`}
      >
        {title}
      </p>
    </div>
  )
}
