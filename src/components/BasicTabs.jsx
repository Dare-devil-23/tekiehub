import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs({ tabs, addon = true }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Box className="py-3">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    allowScrollButtonsMobile={true}
                    TabScrollButtonProps={{
                        style: {
                            color: '#1c8dc1'
                        }
                    }}
                    TabIndicatorProps={{
                        style: {
                            color: '#1c8dc1'
                        }
                    }}
                    sx={{
                        boxShadow: addon ? 1 : 0,
                        borderRadius: 2,
                        maxWidth:'fit-content',
                        margin: 'auto'
                    }}
                >
                    {
                        tabs.map((tab, i) => (
                            <Tab label={tab.label} {...a11yProps(i)} key={i} className="whitespace-nowrap hover:text-[#1c8dc1] hover:transition-all hover:duration-500"/>
                        ))
                    }
                </Tabs>
            </Box>

            {
                tabs.map((tab, i) => (
                    <TabPanel value={value} index={i} key={i}>
                        {tab.children}
                    </TabPanel>
                ))
            }
        </Box>
    );
}