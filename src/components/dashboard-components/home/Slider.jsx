import { Slider } from "@material-tailwind/react";

function SliderRange() {
 return (
  <div className="flex flex-col gap-8">

   <Slider size="lg" color="blue" defaultValue={50} />
  </div>
 );
}
export default SliderRange