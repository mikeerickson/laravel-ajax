<?php

class CreateMembersTableSeeder extends Seeder {

	public function run()
	{
		// Uncomment the below to wipe the table clean before populating
		DB::table('members')->truncate();

		$createmembers = array(
			array('member_no' => '001', 'first_name' => 'Mike', 'last_name' => 'Erickson', 'created_at' => new DateTime, 'updated_at' => new DateTime),
			array('member_no' => '002', 'first_name' => 'Trevor', 'last_name' => 'Erickson', 'created_at' => new DateTime, 'updated_at' => new DateTime),
			array('member_no' => '003', 'first_name' => 'Otis', 'last_name' => 'Kennedy', 'created_at' => new DateTime, 'updated_at' => new DateTime)
		);

		// Uncomment the below to run the seeder
		DB::table('members')->insert($createmembers);
	}

}
