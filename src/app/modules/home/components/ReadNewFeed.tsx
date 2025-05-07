import Container from "../../ui/Container";
import {MoveLeft, MoveRight} from "lucide-react";
import ReadNewCard from "../../ui/ReadNewCard";
import {readNewCardItems} from "../core/dummy/dummy";

const ReadNewFeed = () => {
    return (
        <Container>
            <div className="flex justify-between items-center h-[422px] w-full my-10">
                <div>
                    <div className="flex flex-col gap-5 w-[366px]">
                        <h4 className="text-[24px] font-semibold">Read What's New</h4>
                        <p>Sint consequat in ipsum irure adipisicing dolore culpa incididunt. Veniam elit magna anim
                            ipsum eiusmod eu</p>
                        <div className="flex justify-between items-center">
                            <button
                                className="w-[152px] h-[52px] border border-primary rounded-[4px] text-primary text-[18px]">
                                Explore More
                            </button>
                            <div className="flex gap-5">
                                <MoveLeft className="h-[24px] w-[24px] text-primary"/>
                                <MoveRight className="h-[24px] w-[24px] text-primary"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 grid-col-1 gap-8">
                    {
                        readNewCardItems.map((item, index) => (
                            <ReadNewCard
                                key={index}
                                title={item.title}
                                image={item.image}
                                date={item.date}
                            />
                        ))
                    }
                </div>
            </div>
        </Container>
    )
}

export default ReadNewFeed;