import { supabase } from '@/lib/supabase'

export const getUserData = async (userId) => {
  try {
    const { data, error } = await supabase
    .from('profiles')
    .select()
    .eq('id', userId)
    .single();

    if(error){
      return {success: false, msg: error?.message};
    }
    return { success: true, data };
  } catch (error) {
    console.log('Got an error: ', error);
    return {success: false, msg: error.messsage};
  }
}

// Update User Data
export const updateUserData = async (userId, data) => {
  try {
    const { error } = await supabase
    .from('profiles')
    .update(data)
    .eq('id', userId);

    if(error){
      return {success: false, msg: error?.message};
    }
    return { success: true, data };
  } catch (error) {
    console.log('Got an error: ', error);
    return {success: false, msg: error.messsage};
  }
}