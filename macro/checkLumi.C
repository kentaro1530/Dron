const double lumi0=5961;
const double lumi1=8083;

const double suv0=0.281;
const double suv1=0.314;

const double tgt=1.25;

void checkLumi(){
  std::cout<<"lumi 1 :"<<lumi1<<std::endl;
  std::cout<<"lumi 0 :"<<lumi0*tgt*suv1/suv0<<std::endl;
  std::cout<<lumi0*tgt*suv1/suv0/lumi1<<std::endl;
}
