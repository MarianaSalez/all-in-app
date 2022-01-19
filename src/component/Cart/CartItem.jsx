import React from 'react'
import { Badge } from 'react-bootstrap'

export default function CartItem({item}) {
    return (
        <div>
             <div key={item.id} className="ms-2 me-auto">
                <div className="fw-bold">{item.nombre}</div>
                {item.autor}
                    </div>
                    <Badge variant="primary" pill>
                    {item.cantidad}
                    </Badge>
                </div>
    )
}
