<div>
        <h1>Add Grades</h1>
        <form action="/addStudent/add" method="POST">
            <input type="text" name="name" placeholder="Students Name "/>
            <input type="number" name="percent" placeholder="Students Percentage"/>
            <input type="submit"/>
        </form>
    <?php
    require ('./controllers/studentTable.php');
    ?>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Update Grades</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form action="/addStudent/update" method="POST">
                        <input type="text" name="updatename" placeholder="Students Name "/>
                        <input type="number" name="updatepercent" placeholder="Students Percentage"/>
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

  