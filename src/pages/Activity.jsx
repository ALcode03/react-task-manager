import PageHeader from "../components/PageHeader";
import  ActivityFeed from "../components/ActivityFeed";
import { Activity } from "react";

export default function activity() {
    return (
        <div>
        <PageHeader title="Activity" />
        <Activity />
        </div>
    )
}