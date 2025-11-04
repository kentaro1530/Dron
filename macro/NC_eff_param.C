const double eff_N=0.317;
const double eff_N_err=0.016;
const double NC_ok=0.081;
const double NC_ok_err=0.0084;

void NC_eff_param(){
  const double NC_eff=eff_N*(1.0-NC_ok);
  
  std::cout<<"NC eff "<<NC_eff<<std::endl;
  std::cout<<NC_eff*sqrt(pow(eff_N_err/eff_N, 2)+pow(NC_ok_err/(1.0-NC_ok), 2))<<std::endl;
}
