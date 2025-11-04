#include <iostream>
void calcSA_NC(){
  const double z=14.9476;
  const double dx=1.6;
  const double dy=0.75;

  const double dz=0.25;
  //  std::cout<<4*asin(sin(asin(dx/z))*sin(asin(dy/z)))<<std::endl;

  const double center=4*dx*dy/(z*z);
  const double first =4*dx*dy/((z+dz)*(z+dz));
  const double last  =4*dx*dy/((z-dz)*(z-dz));
  std::cout<<"center "<<center<<std::endl;
  std::cout<<"first  "<<first <<std::endl;
  std::cout<<"last   "<<last  <<std::endl;
  std::cout<<"-err : "<<(first-center)/center<<std::endl;
  std::cout<<"+err : "<<(last-center)/center<<std::endl;
  const double err=(-first+last)/2.0;
  std::cout<<err/sqrt(12)<<std::endl;
}
