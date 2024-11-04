import { supabase } from "@/lib/supabase";
//import { db } from "./db";

export const getCourses = async () => {
  try {
    const {data, error} = await supabase
    .from('courses')
    .select('*');

    if(error) {
      console.log("Erreur chargement des langues: ", error);
      return {success: false, msg: "Could not fetch the courses"};
    }
    console.log("Fetched data from queries.ts file: ", data);
    return {success: true, data: data};
    
  } catch (error) {
    console.log("Erreur chargement des langues: ", error);
    return {success: false, msg: "Could not fetch the courses"};
  }
}

/* export const getCoursesB = async () => {
  const data = await db.query.
} */