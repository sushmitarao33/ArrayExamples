function removeDupString(arr){

  var out=[],seen={};

  for(var i=0;i<arr.length;i++){
    var ch=arr[i];

    if(seen[ch]!=1){
      seen[ch]=1;
      out.push(ch);
    }
  }

  return out;
}
