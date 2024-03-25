import { TabPanel, Tabs, Tab, TabList,TabPanels} from '@chakra-ui/react'
import React from 'react'
import HorariosAgenda from '../../Components/Agendas/horariosAgenda.tsx'








const TabsAgendaDiaPeriodo = (INFO) => {

    return (
<Tabs>
                <TabPanel>
                    <TabList>
                        <Tab>Manha</Tab>
                        <Tab>Tarde</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <HorariosAgenda Dia={INFO.Dia} Periodo={'Manha'}/>
                        </TabPanel>
                        <TabPanel>
                            <HorariosAgenda Dia={INFO.Dia} Periodo={'Tarde'}/>
                        </TabPanel>
                    </TabPanels>
                </TabPanel>
                </Tabs>
    )

}


export default TabsAgendaDiaPeriodo