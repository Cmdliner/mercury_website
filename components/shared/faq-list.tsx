import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type FaqListProps = {
  items: ReadonlyArray<{ question: string; answer: string }>
}

/** An accordion of questions with the first one open. */
export function FaqList({ items }: FaqListProps) {
  return (
    <Accordion defaultValue={[items[0].question]}>
      {items.map((item) => (
        <AccordionItem
          key={item.question}
          value={item.question}
          className="border-b border-border-strong first:border-t"
        >
          <AccordionTrigger className="items-center gap-6 py-6 text-lg font-medium">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="max-w-xl pb-6 text-base leading-relaxed text-muted-foreground">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
