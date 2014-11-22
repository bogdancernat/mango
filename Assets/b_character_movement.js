#pragma strict

var characterSpeed: float;
private var background: GameObject;
private var cameraHeight: float;

private var planes: ArrayList;
private var backgroundRotation;
private var backgroundHeight: float;

function Start () {
	characterSpeed = 2f;
	backgroundRotation = Quaternion.AngleAxis(270, Vector3.right);
	cameraHeight = Camera.main.orthographicSize * 2f;
  	
  	background = GameObject.Find("Background");
	planes = new ArrayList();
	planes.Add(background.gameObject);
	
  	var renderer: Renderer = background.gameObject.GetComponent(Renderer);
	backgroundHeight = renderer.bounds.size.y;
	
//  	var mesh: Mesh = background.GetComponent(MeshFilter).mesh;
//  	var vertices : Vector3[] = mesh.vertices;
//	var uvs : Vector2[]  = new Vector2[vertices.Length];
//	var bounds : Bounds = mesh.bounds;
//	
//	for (var i = 0; i < uvs.Length; i++)
//		uvs[i] = Vector2 (vertices[i].x / bounds.size.x
//						 ,vertices[i].z / bounds.size.x);
//	mesh.uv = uvs;
//	
	
}

function Update () {
	transform.Translate(transform.up * characterSpeed * Time.deltaTime);
//	Debug.Log(transform.position.y);
	var backgroundRef: GameObject = planes[planes.Count - 1];
	
	if((backgroundRef.transform.position.y + backgroundHeight) < (transform.position.y + cameraHeight * 1.5)) {
		var clone: GameObject = GameObject.Instantiate(background, backgroundRef.transform.position + backgroundHeight * Vector3.up, backgroundRotation);
		planes.Add(clone.gameObject);
		clone.name = "Background-"+planes.Count;
	}
	if(planes.Count > 2){
		var toDestroy: GameObject = planes[0];
		planes = planes.GetRange(1, 2);
		GameObject.Destroy(toDestroy);
		background = planes[0];
		background.name = "Background-2";
	}
//	Debug.Log(backgroundRef.transform.position);
	
	
//	Debug.Log(backgroundRefrence.transform.position);
}

//  var mesh : Mesh = GetComponent(MeshFilter).mesh;
//	var vertices : Vector3[] = mesh.vertices;
//	var uvs : Vector2[]  = new Vector2[vertices.Length];
//	var bounds : Bounds = mesh.bounds;
//	for (var i = 0; i < uvs.Length; i++)
//		uvs[i] = Vector2 (vertices[i].x / bounds.size.x
//						 ,vertices[i].z / bounds.size.x);
//	mesh.uv = uvs;