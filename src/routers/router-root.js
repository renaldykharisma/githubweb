import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BaseLayout from "../components/base-layout";

export default function RouterRoot(){
    return(
        <div>
            <Router>
                <Switch>
                    <BaseLayout></BaseLayout>
                </Switch>
            </Router>
        </div>
    )
}