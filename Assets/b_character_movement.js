#pragma strict
var MouseCoords : Vector3;
var MoveSpeed : float = 3.0;
var characterSpeed: float;
private var background: GameObject;
private var cameraWidth: float;

private var planes: ArrayList;
private var backgroundRotation;
private var backgroundWidth: float;

private var targetPos: Vector3;
function Start () {
	characterSpeed = 2f;
	backgroundRotation = Quaternion.AngleAxis(270, Vector3.right);
	cameraWidth = Camera.main.orthographicSize * 2f * Camera.main.aspect;
	planes = new ArrayList();
	
  	for(var go: GameObject in GameObject.FindGameObjectsWithTag('background')){
  		planes.Add(go.gameObject);
  	}
  	
  	background = planes[1];
//	planes.Add(background.gameObject);
	
  	var renderer: Renderer = background.gameObject.GetComponent(Renderer);
	backgroundWidth = renderer.bounds.size.x;
	

}

function Update () {
	
	Move();
//	Debug.Log(transform.position.y);
	var backgroundRef: GameObject = planes[planes.Count - 1];
	
	if((backgroundRef.transform.position.x + backgroundWidth) < (Camera.main.transform.position.x + 2*cameraWidth)) {
		var clone: GameObject = GameObject.Instantiate(background, backgroundRef.transform.position + backgroundWidth * Vector3.right, backgroundRotation);
		planes.Add(clone.gameObject);
		clone.name = "Background-"+planes.Count;
	}
	if(planes.Count > 5){
		var toDestroy: GameObject = planes[0];
		planes = planes.GetRange(1, 5);
		GameObject.Destroy(toDestroy);
		background = planes[0];
		background.name = "Background-2";
	}
//	Debug.Log(backgroundRef.transform.position);
	
	
//	Debug.Log(backgroundRefrence.transform.position);
}
function Move()
{
	  transform.Translate(-1 * transform.right * characterSpeed * Time.deltaTime);
	  var distance : float = transform.position.z - Camera.main.transform.position.z;
      targetPos = new Vector3(Input.mousePosition.x, Input.mousePosition.y, distance);
      targetPos = Camera.main.ScreenToWorldPoint(targetPos);
      transform.position = Vector3.MoveTowards (transform.position, targetPos, MoveSpeed * Time.deltaTime);
  
}

//#pragma strict
//
//var characterSpeed: float;
//private var background: GameObject;
//private var cameraWidth: float;
//
//private var planes: ArrayList;
//private var backgroundRotation;
//private var backgroundWidth: float;
//
//function Start () {
//	characterSpeed = 2f;
//	backgroundRotation = Quaternion.AngleAxis(270, Vector3.right);
//	cameraWidth = Camera.main.orthographicSize * 2f * Camera.main.aspect;
//	planes = new ArrayList();
//	
//  	for(var go: GameObject in GameObject.FindGameObjectsWithTag('background')){
//  		planes.Add(go.gameObject);
//  	}
//  	
//  	background = planes[1];
////	planes.Add(background.gameObject);
//	
//  	var renderer: Renderer = background.gameObject.GetComponent(Renderer);
//	backgroundWidth = renderer.bounds.size.x;
//	
//
//}
//
//function Update () {
//	transform.Translate(-1 * transform.right * characterSpeed * Time.deltaTime);
////	Debug.Log(transform.position.y);
//	var backgroundRef: GameObject = planes[planes.Count - 1];
//	
//	if((backgroundRef.transform.position.x + backgroundWidth) < (Camera.main.transform.position.x + cameraWidth)) {
//		var clone: GameObject = GameObject.Instantiate(background, backgroundRef.transform.position + backgroundWidth * Vector3.right, backgroundRotation);
//		planes.Add(clone.gameObject);
//		clone.name = "Background-"+planes.Count;
//	}
//	if(planes.Count > 3){
//		var toDestroy: GameObject = planes[0];
//		planes = planes.GetRange(1, 3);
//		GameObject.Destroy(toDestroy);
//		background = planes[0];
//		background.name = "Background-2";
//	}
//
//}
