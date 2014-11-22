#pragma strict
var distance = -10;
var target : Transform;
function Update () 
{
	transform.position =  Vector3.right * target.position.x + Vector3(8f,0,distance);
}