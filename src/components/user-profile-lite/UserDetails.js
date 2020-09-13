import React from "react";
import {
  Card,
  CardHeader,
} from "shards-react";

export default function UserDetails ({user}) {
  return(
    <Card small className="mb-4 pt-3">
      <CardHeader className="border-bottom text-center">
        <div className="mb-3 mx-auto">
          <img
            className="rounded-circle"
            src={require("../../images/avatars/0.jpg")}
            alt={user.Nombre}
            width="110"
          />
        </div>
        <h4 className="mb-0">{user.Nombre} {user.Apellido}</h4>
        <span className="text-muted d-block mb-2">{user.Biografia}</span>
      </CardHeader>
    </Card>
  )
}