import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";


export function SideBar({ onSelection }: { onSelection: (item: string) => void }) {
    const handleClick = (item: string) => {
      onSelection(item);
    };  
    return (

        <Sidebar className="w-80">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={HiChartPie}>
                        Overview
                    </Sidebar.Item>
                    <Sidebar.Collapse onClick={() => handleClick("General")} icon={HiShoppingBag} label="General" >
                        <Sidebar.Item href="#">openapi</Sidebar.Item>
                        <Sidebar.Item href="#">info</Sidebar.Item>
                        <Sidebar.Item href="#">tags</Sidebar.Item>
                        <Sidebar.Item href="#">externalDocs</Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Collapse href="#" icon={HiInbox} label="Servers">
                        <Sidebar.Item className="" href="#">
                            2ttp://petstore.swagger.io/v2
                        </Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Collapse href="#" icon={HiUser} label="Paths">
                        <Sidebar.Collapse className="pl-6" href="#" icon={HiUser} label="/pet">
                            <Sidebar.Collapse className="pl-12" href="#" icon={HiUser} label="get">
                                <Sidebar.Item className="pl-15" href="#">
                                    request
                                </Sidebar.Item>
                            </Sidebar.Collapse>
                            <Sidebar.Collapse className="pl-12" href="#" icon={HiUser} label="post">
                                <Sidebar.Item className="pl-15" href="#">
                                    requests
                                </Sidebar.Item>
                                <Sidebar.Item className="pl-15" href="#">
                                    response
                                </Sidebar.Item>
                            </Sidebar.Collapse>
                        </Sidebar.Collapse>
                        <Sidebar.Collapse className="pl-6" href="#" icon={HiUser} label="/getpetid/{}">
                            <Sidebar.Collapse className="pl-12" href="#" icon={HiUser} label="get">
                                <Sidebar.Item className="pl-15" href="#">
                                    request
                                </Sidebar.Item>
                            </Sidebar.Collapse>
                        </Sidebar.Collapse>
                    </Sidebar.Collapse>
                    <Sidebar.Collapse href="#" icon={HiUser} label="Components">
                        <Sidebar.Collapse className="pl-6" href="#" icon={HiUser} label="schemas">
                            <Sidebar.Item onClick={() => handleClick("Schemas")} className="pl-8" href="#">
                                request
                            </Sidebar.Item>
                        </Sidebar.Collapse>
                        <Sidebar.Collapse className="pl-6" href="#" icon={HiUser} label="requestBodies">
                            <Sidebar.Item className="pl-8" href="#">
                                request
                            </Sidebar.Item>
                        </Sidebar.Collapse>
                        <Sidebar.Collapse className="pl-6" href="#" icon={HiUser} label="responses">
                            <Sidebar.Item className="pl-8" href="#">
                                requests
                            </Sidebar.Item>
                            <Sidebar.Item className="pl-8" href="#">
                                response
                            </Sidebar.Item>
                        </Sidebar.Collapse>
                        <Sidebar.Collapse className="pl-6" href="#" icon={HiUser} label="securitySchemas">
                            <Sidebar.Item className="pl-8" href="#">
                                requests
                            </Sidebar.Item>
                            <Sidebar.Item className="pl-8" href="#">
                                response
                            </Sidebar.Item>
                            <Sidebar.Item className="pl-8" href="#">
                                requests
                            </Sidebar.Item>
                            <Sidebar.Item className="pl-8" href="#">
                                response
                            </Sidebar.Item>
                            <Sidebar.Item className="pl-8" href="#">
                                requests
                            </Sidebar.Item>
                            <Sidebar.Item className="pl-8" href="#">
                                response
                            </Sidebar.Item>
                            <Sidebar.Item className="pl-8" href="#">
                                requests
                            </Sidebar.Item>
                            <Sidebar.Item className="pl-8" href="#">
                                response
                            </Sidebar.Item>
                        </Sidebar.Collapse>
                    </Sidebar.Collapse>
                    <Sidebar.Collapse href="#" icon={HiShoppingBag} label="Security">
                        Products
                    </Sidebar.Collapse>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}