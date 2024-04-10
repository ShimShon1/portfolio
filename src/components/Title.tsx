export default function Title({ name }: { name: string }) {
  return (
    <div className=" gap-2 md:flex md:text-left">
      <h2
        className="lora mb-6 text-4xl capitalize"
        id={name + "-title"}
      >
        {name}
      </h2>
      <hr className="relative top-6   hidden w-1/2  border-[1.5px] border-sky-900 border-opacity-30 md:inline-block" />
    </div>
  );
}
