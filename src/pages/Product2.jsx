import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './product1.css'
import photo9 from '../Components/Assets/golden.png'
import photo3 from '../Components/Assets/bike.png'

const Product2 = () => {
  const[menu,setMenu]= useState("home")
  return (
       <div className="container">
         <h2 id='hh'>SE03</h2>
        <img src={photo9}  className="vehicle"/>
        <img src={photo3}  className="vehicle"/>
        <div className="color-selection">
        <p id='color'>Select Color:</p> 
            <button className="color-button red"></button>
            <button className="color-button blue"></button>
            <button className="color-button black"></button>
        </div>
        <div className="details">
            
            <p id='para'>
            Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100 km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhino. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!!
</p>
        </div>
        <table id='table'>
        <thead>
          <tr>
            <th id='th' colSpan="2">Specification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Warranty on electronics</td>
            <td>1 year</td>
          </tr>
          <tr>
            <td>Battery</td>
            <td>2.7Kwh</td>
          </tr>
          <tr>
            <td>Max range (@30km/h)</td>
            <td>150 km</td>
          </tr>
          <tr>
            <td>Max range (@45km/h)</td>
            <td>110 km</td>
          </tr>
          <tr>
            <td>Max range (@full speed)</td>
            <td>90 km</td>
          </tr>
          <tr>
            <td>Motor</td>
            <td>1500W</td>
          </tr>
          <tr>
            <td>Charging time</td>
            <td>4 hours (12A)</td>
          </tr>
          <tr>
            <td>Battery warranty</td>
            <td>3 Years</td>
          </tr>
          <tr>
            <td>Max speed</td>
            <td>55 km/h</td>
          </tr>
         
          <tr>
            <td>Max range (@45km/h)</td>
            <td>90 km</td>
          </tr>
          <tr>
            <td>Other key benefits</td>
            <td>
              Fire-safe battery<br />
              Range prediction<br />
              Comfortable ride<br />
              Stable and safe
            </td>
          </tr>
          <tr>
            <td>Battery features</td>
            <td>
            LFP with 1500 cycles<br />
             Active Balancing<br />
             Waterproof (IP67)

            </td>
          </tr>
        </tbody>
      </table>
        <button type="button" className="buy" onClick={()=>{setMenu("prebook")}}><Link className='prebook1' to='/prebook'>Buy Now </Link></button>
    </div>
  
  )
}

export default Product2
