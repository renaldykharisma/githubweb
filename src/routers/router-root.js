import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BaseLayout from "../components/base-layout";
import Home from "../components/home";

export default function RouterRoot(){
    return(
        <div>
            <Router>
                <Switch>
                    <BaseLayout>
                        <Route path="/" component={Home}></Route>
                    </BaseLayout>
                </Switch>
            </Router>
        </div>
    )
}