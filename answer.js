function Matrix(arr1)
{
	//var matrx=[[],[]];
	this.matrx=arr1;
	
	/*return function()
	{
	this.matrx=arr1;
	return this;	
	}*/

}
Matrix.prototype.copy=function(mat)
{
	var MatrixCopy=this;
	return MatrixCopy;
}
Matrix.prototype.add=function(mat)
{ 
	var i,j;
	var MatrixSum=new Matrix([[],[]]);
	if(mat.matrx.length==this.matrx.length&&mat.matrx[0].length==this.matrx[0].length)
	{	
		for(i=0;i<mat.matrx.length;i++)
		{
			for(j=0;j<mat.matrx[0].length;j++)
			{

				MatrixSum.matrx[i][j]= this.matrx[i][j]+mat.matrx[i][j];

			}
		}
	}
	else console.log("size is not equal");	
return MatrixSum;
}

Matrix.prototype.multiplication=function(mat)
{
	var MatrixProduct=new Matrix([[],[]]);
	var i,j;
	if(this.matrx[0].length==mat.matrx.length)
	{
		for(i=0 ; i<mat.matrx.length ; i++)
		{
			for(j=0 ; j<mat.matrx[0].length ; j++)
			{
				MatrixProduct.matrx[i][j] =0 ;
				for(k=0 ; k<mat.matrx.length ; k++)
				{
					MatrixProduct.matrx[i][j] = MatrixProduct.matrx[i][j] + (this.matrx[i][k] * mat.matrx[k][j]);
				}
			}
		}
	}
	else console.log("multiplication not possible");
return MatrixProduct;
}


var array1=[[1,2],[3,8]];
var array2=[[3,4],[5,6]];
var Matrix1  = new Matrix(array1);
var Matrix2 = new Matrix(array2);
//console.log(typeof(Matrix1));
console.log(Matrix1.matrx.length);
console.log(typeof(Matrix1.matrx));
console.log(Matrix1.add(Matrix2));
console.log(Matrix1.multiplication(Matrix2));
console.log(Matrix1.copy().add(Matrix2));
console.log(Matrix1.copy().multiplication(Matrix2));
 
