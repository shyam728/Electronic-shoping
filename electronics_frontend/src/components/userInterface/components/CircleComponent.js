import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { serverURL } from "../../../services/FetchNodeServices";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
export default function CircleComponent({categories})
{
    const theme = useTheme();
  const matches_md = useMediaQuery(theme.breakpoints.down('md'));
  const matches_sm = useMediaQuery(theme.breakpoints.down('sm'));
    var settings = {
                    
    infinite: true,
    speed: 500,
    slidesToShow: matches_md?5:matches_sm?4:8,
    slidesToScroll: 1,
    arrows:matches_md || matches_sm?false:true
   };
  
  const AddSlider=()=>{
    return categories.map((item)=>{
    return(<div style={{width:'100%'}}>
       <div style={{ width:'100%',display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center'}}>
        <div style={{width:'80%',height:'80%',borderRadius:'40%'}}>
        <img src={`${serverURL}/images/${item.image}`}  style={{width:'100%'}}/>
       </div> 
       {matches_md||matches_sm?<></>:
       <div style={{color:'#fff'}}>{item.categoryname}</div>}
       </div>
    </div>)
    })
  }

  return(<div style={{width:'80%'}}>
  <Slider {...settings}>
    {AddSlider()}    
  </Slider>
  </div>)
}