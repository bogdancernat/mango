#pragma strict
var distance = -10;
var lift = 4;
var target : Transform;
function Update () 
{
	transform.position = target.position + Vector3(0,lift,distance);
}