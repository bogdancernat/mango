#pragma strict
 var MouseCoords : Vector3;
 var MoveSpeed : float = 3.0;

 function Update()
 {
      var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
      var hit : RaycastHit;
  
      if (Physics.Raycast (ray, hit, Mathf.Infinity))
      {
           MouseCoords = Vector3(hit.point.x, 0.5f, hit.point.z);
      }
 
    
      Move();
      
 }
 
 function Move()
 {
      var StartPosition : Vector3 = transform.position;
      var EndPosition : Vector3 = MouseCoords;
      var t : float = 0.0;
 
      while (t < 1.0) 
      {
           t += Time.deltaTime * MoveSpeed;
       transform.position = Vector3.Lerp(StartPosition, EndPosition, t);
      yield;
      }
 }