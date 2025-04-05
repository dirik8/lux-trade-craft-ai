
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How does my course work?",
      answer: "My cryptocurrency trading course is designed to help investors navigate the cryptocurrency market effectively and profitably. The course consists of several key components that work together to enhance your trading skills and knowledge."
    },
    {
      question: "How to get started?",
      answer: "To get started, simply send me a message on Telegram. My goal is to empower you with the knowledge, skills, and support necessary to succeed in the world of cryptocurrency trading."
    },
    {
      question: "How much is my course?",
      answer: "My course costs 10% commission from the profits earned during the period. This commission is applicable to the profits you make."
    },
    {
      question: "Can I expect a specific number of trading signals per month?",
      answer: "While the number of trading signals may vary depending on market conditions, my aim is to provide you with a consistent flow of high-quality signals. My focus is on quality over quantity, ensuring that the signals you receive have the best potential for profit."
    },
    {
      question: "Are the personalized coaching sessions conducted online or in person?",
      answer: "To accommodate traders from all over the world, my personalized coaching sessions are conducted online via the Telegram App."
    },
    {
      question: "What if I'm a beginner in crypto trading? Can I still benefit from your course?",
      answer: "Absolutely! My course is designed to cater to traders of all experience levels, from beginners to seasoned professionals."
    }
  ];

  return (
    <section className="py-20 bg-blkr-blackLight">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 section-centered">
          <h2 className="section-title inline-block">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-lg text-blkr-offWhite/80 max-w-2xl mx-auto">
            Find answers to commonly asked questions about our trading services and programs.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-blkr-black border border-blkr-gold/20 rounded-md overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-blkr-blackLight/50 transition-colors">
                  <span className="text-left font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-blkr-offWhite/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
