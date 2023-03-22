import {Component, useState, useEffect, Fragment} from "react";
import {useParams} from "react-router";
import axios from "axios";

function  FoodList(props){
    let {cno}=useParams()
    const [foodList,setFoodList]=useState([]) // this.state={foodList:[]}
    const [cateInfo,setCateInfo]=useState({})
          // this.props.match.params.cno => router 5.xxx
          // componentDidMount() => X
    useEffect(()=>{
        axios.get("http://localhost/food/food_list_react",{
            params:{
                cno:cno
            }
        }).then(response=>{
            console.log(response.data)
            setFoodList(response.data)
        })
        axios.get("http://localhost/food/category_info_react",{
            params:{
                cno:cno
            }
        }).then(response=>{
            console.log(response.data)
            setCateInfo(response.data)
        })
    },[])
    let html=foodList.map((food)=>
        <table className="table">
            <tr>
                <td className="text-center" width="30%" rowspan="4">
                    <a href="#">
                        <img src={food.poster} style={{"width":"320px","height": "150px"}} className="img-rounded"/>
                    </a>
                </td>
                <td width="70%"><a href="#"><span>{food.name}</span></a>&nbsp;<span style={{"color":"orange"}}>{food.score}</span></td></tr>
            <tr>
                <td width="70%">{food.address}</td>
            </tr>
            <tr>
                <td width="70%">{food.tel}</td>
            </tr>
            <tr>
                <td width="70%">{food.type}</td>
            </tr>
        </table>
    )
    return (
            <Fragment>
                 <div className="jumbotron">
                    <h3 className="text-center">{cateInfo.title}</h3>
                    <h4 className="text-center">{cateInfo.subject}</h4>
                </div>
                <div class="row">
                    <table class="table">
                        <tr>
                            <td>
                                {html}
                           </td>
                       </tr>
                   </table>
                </div>
            </Fragment>

           )

}

export default FoodList;