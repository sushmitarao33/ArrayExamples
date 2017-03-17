//ArrayHelper.js
var ArrayHelper=(function(){
  var arr=[1,2,3,4,1,2];


  var eliminateDups=function(arr) {
      var len=arr.length, out=[];

      arr.filter(function(ch,index,obj) {
        if(obj.indexOf(ch)==index)
          out.push(ch);
      });

      return out;
  };

//From a unsorted array, check whether there are any two numbers that will sum up to a given number
  var sumFinder=function(arr,sum) {
    var len=arr.length,sub=[],diff={};

    for(var i=0;i<len;i++){
      var sub=sum-arr[i];
      if(diff[sub]){
        return true;
      }
      else{
        diff[arr[i]] = true;
      }
    }
    return false;
  };
  function permutations(str){
      var arr = str.split(''),
          len = arr.length,
          perms = [],
          rest,
          picked,
          restPerms,
          next;

          if (len == 0)
              return [str];

          for (var i=0; i<len; i++)
          {
              rest = Object.create(arr);
              picked = rest.splice(i, 1);

              restPerms = permutations(rest.join(''));

             for (var j=0, jLen = restPerms.length; j< jLen; j++)
             {
                 next = picked.concat(restPerms[j]);
                 perms.push(next.join(''));
             }
          }
         return perms;
  };
  //permutations of a String
  function permutations(permStr,word){

      if(word.length == 0 ){
          console.log(permStr+word);
      }
      else {
          for(var i=0;i<word.length;i++){
          //  console.log("Here: i="+i+" "+word.substring(0,i)+word.substring(i+1,word.length));
             permutations(permStr+word.charAt(i),word.substring(0,i)+word.substring(i+1,word.length));
          }
      }
  };

  function permutation(input){
    permutations("",input);
  }

  permutation("123");


  function permutator(str) {
    var results = [];
    var arr=str.split("");

    function permute(arr, memo) {
      var cur, memo = memo || [];

      for (var i = 0; i < arr.length; i++) {
        cur = arr.splice(i, 1);
        if (arr.length === 0) {
          results.push(memo.concat(cur));
        }
        permute(arr.slice(), memo.concat(cur));
        arr.splice(i, 0, cur[0]);
      }

      return results;
    }

    return permute(str);
  }
permutator("123");


  var recursivePermutate=function(permStr,word) {
    var len=word.length;
    if(len==0)
      console.log(permStr+word);
    else {
      for(var i=0;i<len;i++){
        console.log("i= "+i+"permStr= "+permStr+word.charAt(i)+"=="+word.substring(0,i)+"=="+word.substring(i+1,len));
          recursivePermutate(permStr+word.charAt(i),word.substring(0,i)+word.substring(i+1,len))
      }
    }
  };

  function permutation(input){
    recursivePermutate("",input);
  }

  permutation("123");

  return {
    eliminateDups:eliminateDups,
    sumFinder:sumFinder,
    permutations:permutations,
    recursivePermutate:recursivePermutate
  }


})();
ArrayHelper.eliminateDups([1,2,3,4,1,2]);
