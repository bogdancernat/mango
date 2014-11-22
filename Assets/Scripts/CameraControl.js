#pragma strict
var distance = -10;
var lift = 4;
var target : Transform;
function Update () 
{
	transform.position =  Vector3.right * target.position.x + Vector3(4f,0,distance);
}