async function foo(){
   
    var res=await fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
    var res1=await res.json();
    console.log(res1);
}
foo();