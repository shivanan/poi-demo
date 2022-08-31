import * as React from "react";
import { registerWidget, registerLink, registerUI, IContextProvider, } from './uxp';
import { TitleBar, FilterPanel, WidgetWrapper } from "uxp/components";
import './styles.scss';

interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string
}

const PoiWidget: React.FunctionComponent<IWidgetProps> = (props) => {
    return (
        <WidgetWrapper>
            <TitleBar title='Poi'>
                <FilterPanel>
                </FilterPanel>
               
            </TitleBar>
            <div style={{flex:1}}>
                    <h1>Point of Interest Widget</h1>
                </div>
        </WidgetWrapper>
    )
};

/**
 * Register as a Widget
 */
registerWidget({
    id: "poi",
    widget: PoiWidget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
});

/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "poi",
    label: "Poi",
    // click: () => alert("Hello"),
    component: PoiWidget
});
*/

/**
 * Register as a UI
 */

 /*
registerUI({
    id:"poi",
    component: PoiWidget
});
*/