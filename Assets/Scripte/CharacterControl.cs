using UnityEngine;
using System.Collections;
public class CSharp : MonoBehaviour {
	public float upspeed = 75.0f;
	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		bool jetpackActive = Input.GetButton("Fire1");
		
		if (jetpackActive)
		{
			rigidbody2D.AddForce(new Vector2(0, upspeed));
		}
	}
	
}