import React from "react";
import SubTitle from "./SubTitle";
import Title from "./Title";
import Text from "./Text";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import data from "../data/accordion.json";
import { BsChevronDown } from "react-icons/bs";

const Value = () => {
    return (
        <section className="value-section">
            <div className="container">
                <div className="value-left">
                    <img src="/images/value.png" alt="" />
                </div>
                <div className="value-right">
                    <SubTitle subTitle={"Our  Value"} />
                    <Title title={"Value We Give to You"} />
                    <Text text={"We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better"} />
                    <Accordion allowMultipleExpanded={true} allowZeroExpanded={true} className="accordion">
                        {data.map((accordionItem) => (
                            <AccordionItem key={accordionItem.id} className="accordion-item">
                                <AccordionItemHeading className="accordion-item-heading">
                                    <AccordionItemButton>{accordionItem.heading}</AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="accordion-item-content">{accordionItem.detail}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default Value;
