"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { db } from "@/db/index";
import { users } from "@/db/schema";
import { DateRangePicker } from "@/components/ui/date-range-picker";
import { cn } from "@/lib/utils";


const FormSchema = z.object({
	name: z.string({
    	required_error: "Please enter a name"
	}).min(2, {
    	message: "name must be more than 2 characters long"
	}).max(20, {
    	message: "name must be no longer than 20 characters"
	}),
	question1: z.string({
    	required_error: "Please select an option"
	})
})



export default function Quiz() {
	const { toast } = useToast();

	const form = useForm<z.infer<typeof FormSchema>>({
    	resolver: zodResolver(FormSchema)
	})

	function onSubmit(data: z.infer<typeof FormSchema>) {
    if (data.question1 === "yes") {
        toast({
            title: `Congratulations ${data.name}`,
            description: "You are a drug dealer",
        })
    } else {
        toast({
            title: `Thank you ${data.name}`,
            description: "Unfortunately you are not a drug dealer",
        })
    }
	let isDrugDealer = true;
	// await.db.insertOneUser(data.name, isDrugDealer);
  }

	return (
    	<Form {...form}>
        	<form onSubmit={form.handleSubmit(onSubmit)} className="w2/3 space-y-6">
            	<FormField
                	control={form.control}
                	name="name"
                	render={({ field }) => (
                    	<FormItem>
                        	<FormLabel>Question 1:</FormLabel>
                        	<FormDescription>What is your name?</FormDescription>
                            	<FormControl>
                                	<Input placeholder="your name here" {...field}/>
                            	</FormControl>
                        	<FormMessage/>
                    	</FormItem>
                	)}
            	/>
				<FormField
                	control={form.control}
                	name="name"
                	render={({ field }) => (
                    	<FormItem>
                        	<FormLabel>Question 2:</FormLabel>
                        	<FormDescription>Which days should we take drugs?</FormDescription>
                            	<FormControl>
								<DateRangePicker
						onUpdate={(values) => console.log(values)}
						initialDateFrom="2023-01-01"
						initialDateTo="2023-12-31"
						align="start"
						locale="en-GB"
						showCompare={false}
					/>
                            	</FormControl>
                        	<FormMessage/>
                    	</FormItem>
                	)}
            	/>
            	<FormField
                	control={form.control}
                	name="question1"
                	render={({ field }) => (
                    	<FormItem>
                        	<FormLabel>Question 3:</FormLabel>
                        	<FormDescription>Do you sell drugs? (cuz i nid sum)</FormDescription>
                        	<Select onValueChange={field.onChange} defaultValue={field.value}>
                            	<FormControl>
                                	<SelectTrigger>
                                    	<SelectValue placeholder="Please select an answer"/>
                                	</SelectTrigger>
                            	</FormControl>
                            	<SelectContent>
                                	<SelectItem value="yes">Yes</SelectItem>
                                	<SelectItem value="no">Hell Yes</SelectItem>
                            	</SelectContent>
                        	</Select>
                        	<FormMessage/>
                    	</FormItem>
                	)}
            	/>
				<FormField
                	control={form.control}
                	name="name"
                	render={({ field }) => (
                    	<FormItem>
                        	
                    	</FormItem>
                	)}
            	/>
            	<Button type="submit">Submit</Button>
        	</form>
    	</Form>
	)
}
