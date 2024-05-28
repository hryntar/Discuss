"use client";

import { Button, Input, Popover, PopoverContent, PopoverTrigger, Textarea } from "@nextui-org/react";
import * as actions from "@/actions";
import { useFormState } from "react-dom";
import FormButton from "@/components/common/FormButton";

export default function PostCreateForm() {
   return (
      <Popover placement="left">
         <PopoverTrigger>
            <Button color="primary">Create a Post</Button>
         </PopoverTrigger>
         <PopoverContent>
            <form >
               <div className="flex flex-col gap-4 p-4 w-80">
                  <h3 className="text-lg">Create a Post</h3>
                  <Input
                     // isInvalid={!!formState.errors.name}
                     // errorMessage={formState.errors.name?.join(", ")}
                     name="title"
                     label="Title"
                     labelPlacement="outside"
                     placeholder="Title"
                  />
                  <Textarea
                     // isInvalid={!!formState.errors.description}
                     // errorMessage={formState.errors.description?.join(", ")}
                     name="content"
                     label="Content"
                     labelPlacement="outside"
                     placeholder="Content"
                  />

                  {/* {formState.errors._form?.join(", ")} */}

                  <FormButton>Create Post</FormButton>
               </div>
            </form>
         </PopoverContent>
      </Popover>
   );
}