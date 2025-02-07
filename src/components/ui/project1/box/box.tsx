import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLElement> & {};

export const Box = ({ className, children }: Readonly<Props>) => {
  return (
    <div className={cn("", className)}>
      <fieldset className="border border-blue-200 rounded-md shadow-blue-100 shadow-md p-4 pt-6 gap-2 grid grid-cols-[max-content_auto] items-center">
        <section className="col-span-2 flex justify-end gap-x-2 mt-2">
          {children}
        </section>
      </fieldset>
    </div>
  );
};
