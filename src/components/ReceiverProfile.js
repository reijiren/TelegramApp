import React from "react";
import { useSelector } from "react-redux";

export default function ReceiverProfile() {
    const data = useSelector((state) => state.user);
    const user = data.receiver[0];

    return(
        <div className="d-flex flex-column">
            <div className="d-flex flex-column my-4 align-items-center">
                <img src={`${user.image?.split('|&&|')[0]}`} height={100} width={100} className="rounded-circle mb-2" />
                <h4><b>{user.fullname}</b></h4>
                <h6 className="text-gray">Online</h6>
            </div>
            <div className="d-flex flex-column">
                <div className="ml-1 mb-3">
                    <label>Username</label>
                    <div className="ml-2">{user.username || "- no username -"}</div>
                </div>
                <div className="ml-1 mb-3">
                    <label>Phone Number</label>
                    <div className="ml-2">{user.phone || "- no phone number -"}</div>
                </div>
                <div className="ml-1 mb-3">
                    <label>Bio</label>
                    <div className="ml-2">{user.bio || "- no bio set -"}</div>
                </div>
            </div>
        </div>
    )
}