import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className }: Props) {
  return (
    <div className={cn("max-w-screen-xl mx-auto p-4 ", className)}>
      {children}
    </div>
  );
}

export default Container;
